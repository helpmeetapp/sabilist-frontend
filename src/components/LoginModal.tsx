import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from '@mui/material/Modal';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { ImSpinner10 } from 'react-icons/im';
import { MdLockOutline } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

import Button from './Button';
import TextInput from './TextInput';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  openRegisterModal: () => void;
};

const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
  openRegisterModal,
}) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/auth/login/`,
        credentials,
      );

      console.log(response.data);
      const { access, refresh } = response.data.data;

      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);

      setCredentials({ email: '', password: '' });

      toast.success('Sign in successful. Welcome.', {
        autoClose: 3000,
        position: 'top-right',
        hideProgressBar: true,
        closeOnClick: true,
      });

      onClose();
    } catch (error) {
      setIsLoading(false);

      toast.error('Invalid credentials.', {
        autoClose: 5000,
        position: 'top-right',
        hideProgressBar: true,
        closeOnClick: true,
      });
      // console.log(error);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="bg-[#F8F9FF] absolute w-[90%] h-[80%] lg:w-[900px] md:h-[500px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[30px]">
        <div className="w-full h-full flex md:flex-row">
          <div className="w-full h-full md:w-[60%] lg:w-[67%] my-4 md:py-0 flex items-center justify-center">
            <div className="w-full lg:w-3/4 text-[#009379] flex flex-col items-center text-center gap-4 rounded-l-[30px]">
              <h1 className="text-3xl font-bold">Sign in to HelpMeet</h1>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-[#009379] p-2 flex items-center">
                  <FaFacebookF size={18} />
                </div>

                <div className="w-8 h-8 rounded-full border border-[#009379] p-2 flex items-center">
                  <FaGoogle size={20} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="w-3/4 space-y-6">
                <p className="text-lg">Or use your email</p>

                <div className="space-y-4">
                  <TextInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    iconComponent={<MdOutlineEmail />}
                    value={credentials.email}
                    onChange={handleInputChange}
                  />

                  <div className="bg-[#E5F4F2] flex items-center gap-2 p-2 rounded-xl">
                    <MdLockOutline size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      className="w-full bg-[#E5F4F2] focus:outline-none h-8 text-black"
                      value={credentials.password}
                      onChange={handleInputChange}
                    />
                    <span
                      className="hover:cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword && <FiEye />}
                      {!showPassword && <FiEyeOff />}
                    </span>
                  </div>

                  <small className="text-[#BFAC05]">
                    <i>Forgot your password?</i>
                    <span className="underline">Click Here!</span>
                  </small>
                </div>

                <button
                  type="submit"
                  className="px-12 py-2 bg-[#009379] text-[#F8F9FF] rounded-2xl font-semibold"
                  disabled={
                    isLoading ||
                    Object.values(credentials).some(
                      (value) => value.trim() === '',
                    )
                  }
                >
                  {isLoading && (
                    <span className="flex items-center gap-2">
                      <ImSpinner10 className="animate-spin" />
                      <p>Signing in...</p>
                    </span>
                  )}

                  {!isLoading && 'Sign In'}
                </button>
              </form>
              <small className="block md:hidden">
                Don't have an account?
                <button onClick={openRegisterModal} className="underline">
                  Sign Up
                </button>
              </small>
            </div>
          </div>

          <div className="hidden md:flex md:w-[40%] lg:w-[33%] flex-col items-center justify-center gap-4 bg-[#009379] text-[#F8F9FF] md:rounded-r-[30px]">
            <h1 className="text-3xl font-bold">Hello, Buddy</h1>
            <p className="text-sm">Enter your details to start up HelpMeet</p>

            <Button large label="Sign Up" onClick={openRegisterModal} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
