import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from '@mui/material/Modal';
import { LuUser2 } from 'react-icons/lu';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { ImSpinner10 } from 'react-icons/im';
import { MdLockOutline } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

import Button from './Button';
import TextInput from './TextInput';

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  openLoginModal: () => void;
  openOtpModal: () => void;
};

const RegisterModal: FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  openLoginModal,
  openOtpModal,
}) => {
  const [credentials, setCredentials] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    re_password: '',
    role: 'user',
  });

  const [show, setShow] = useState({
    password: false,
    cpassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const passwordsMatch = credentials.password === credentials.re_password;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwordsMatch) {
      try {
        setIsLoading(true);

        await axios.post(
          `${process.env.REACT_APP_BASE_URI}/auth/users/`,
          credentials,
        );

        // console.log(response.data);

        setCredentials({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          password: '',
          re_password: '',
          role: '',
        });

        toast.success(
          'Account created successfully! Please verify your account to proceed.',
          {
            autoClose: 5000,
            position: 'top-right',
            hideProgressBar: true,
            closeOnClick: true,
          },
        );

        openOtpModal();
      } catch (error) {
        setIsLoading(false);

        toast.error('Account creation failed!.', {
          autoClose: 5000,
          position: 'top-right',
          hideProgressBar: true,
          closeOnClick: true,
        });
        // console.log(error);
      }
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="bg-[#F8F9FF] absolute w-[90%] h-[90%]  lg:w-[90%] xl:w-[1000px] md:h-[600px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[30px]">
        <div className="w-full h-full flex md:flex-row">
          <div className="hidden md:flex w-full md:w-[40%] lg:w-[33%] h-full flex-col items-center justify-center gap-2 bg-[#009379] text-[#F8F9FF] md:rounded-l-[30px]">
            <h1 className="text-3xl xl:text-4xl font-bold">Welcome Back</h1>
            <p className="text-sm">Already have an account?</p>
            <Button large label="Sign In" onClick={openLoginModal} />
          </div>

          <div className="w-full h-full md:w-[60%] lg:w-[67%] flex items-center justify-center rounded-r-[30px]">
            <div className="w-3/4 text-[#009379] flex flex-col items-center text-center gap-2 md:gap-4">
              <h1 className="text-3xl xl:text-4xl font-bold">Create Account</h1>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-[#009379] p-2 flex items-center">
                  <FaFacebookF size={18} />
                </div>
                <div className="w-8 h-8 rounded-full border border-[#009379] p-2 flex items-center">
                  <FaGoogle size={20} />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="w-full space-y-2 md:space-y-6"
              >
                <p className="text-lg">Or register with your email</p>

                <div className="space-y-2 text-base">
                  <TextInput
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    iconComponent={<LuUser2 />}
                    value={credentials.first_name}
                    onChange={handleInputChange}
                  />

                  <TextInput
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    iconComponent={<LuUser2 />}
                    value={credentials.last_name}
                    onChange={handleInputChange}
                  />

                  <TextInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    iconComponent={<MdOutlineEmail />}
                    value={credentials.email}
                    onChange={handleInputChange}
                  />

                  <TextInput
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    iconComponent={<MdOutlineLocalPhone />}
                    value={credentials.phone}
                    onChange={handleInputChange}
                  />

                  <div className="space-y-2">
                    {!passwordsMatch && (
                      <small className="text-red-500 font-semibold">
                        Passwords do not match.
                      </small>
                    )}

                    <div className="bg-[#E5F4F2] flex items-center gap-2 p-2 rounded-xl">
                      <MdLockOutline size={20} />
                      <input
                        type={show.password ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        className="w-full bg-[#E5F4F2] h-8 focus:outline-none text-black"
                        value={credentials.password}
                        onChange={handleInputChange}
                      />
                      <span
                        className="hover:cursor-pointer"
                        onClick={() =>
                          setShow({
                            ...show,
                            password: !show.password,
                          })
                        }
                      >
                        {show.password && <FiEye />}
                        {!show.password && <FiEyeOff />}
                      </span>
                    </div>

                    <div className="bg-[#E5F4F2] flex items-center gap-2 p-2 rounded-xl">
                      <MdLockOutline size={20} />
                      <input
                        type={show.cpassword ? 'text' : 'password'}
                        name="re_password"
                        placeholder="Confirm password"
                        className="w-full bg-[#E5F4F2] h-8 focus:outline-none text-black"
                        value={credentials.re_password}
                        onChange={handleInputChange}
                      />
                      <span
                        className="hover:cursor-pointer"
                        onClick={() =>
                          setShow({
                            ...show,
                            cpassword: !show.cpassword,
                          })
                        }
                      >
                        {show.cpassword && <FiEye />}
                        {!show.cpassword && <FiEyeOff />}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-12 py-2 bg-[#009379] text-[#F8F9FF] rounded-2xl font-semibold"
                  disabled={
                    isLoading ||
                    !passwordsMatch ||
                    Object.values(credentials).some(
                      (value) => value.trim() === '',
                    )
                  }
                >
                  {isLoading && (
                    <span className="flex items-center gap-2">
                      <ImSpinner10 className="animate-spin" />
                      <p>Signing up...</p>
                    </span>
                  )}

                  {!isLoading && 'Sign Up'}
                </button>
              </form>
              <small className="block md:hidden">
                Already have an account?{' '}
                <button onClick={openLoginModal} className="underline">
                  Sign In
                </button>
              </small>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
