import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from '@mui/material/Modal';
import { ImSpinner10 } from 'react-icons/im';
import { MdOutlineEmail } from 'react-icons/md';
import { ChangeEvent, FC, useState } from 'react';

import TextInput from './TextInput';

type ResendOtpModalProps = {
  isOpen: boolean;
  onClose: () => void;
  openOtpModal: () => void;
};

const ResendOtpModal: FC<ResendOtpModalProps> = ({
  isOpen,
  onClose,
  openOtpModal,
}) => {
  const [verify, setVerify] = useState({ email: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVerify((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleOtpVerification = async () => {
    try {
      setIsLoading(true);

      await axios.post(
        `${process.env.REACT_APP_BASE_URI}/auth/otp/new/`,
        verify,
      );

      // console.log(res.data);

      setVerify({ email: '' });

      toast.success('OTP has been sent to your email.', {
        autoClose: 5000,
        position: 'top-right',
        hideProgressBar: true,
        closeOnClick: true,
      });

      openOtpModal();
      onClose();
    } catch (error) {
      setIsLoading(false);

      toast.error('Something went wrong. Try again later.', {
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
      <div className="bg-[#F8F9FF] absolute w-[95%] md:w-[400px] h-[230px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-4 m-2 text-center">
          <h1 className="text-3xl xl:text-4xl font-bold text-[#009379]">
            Verification
          </h1>

          <div className="flex flex-col items-center justify-center gap-2">
            <small>
              Please provide your email below so that we can send you a new
              6-digit otp code.
            </small>

            <div className="">
              <TextInput
                type="email"
                name="email"
                placeholder="Email"
                value={verify.email}
                onChange={handleInputChange}
                iconComponent={<MdOutlineEmail />}
              />
            </div>
          </div>

          <button
            onClick={handleOtpVerification}
            className="px-12 py-2 bg-[#009379] text-[#F8F9FF] rounded-2xl font-semibold"
            disabled={
              isLoading ||
              Object.values(verify).some((value) => value.trim() === '')
            }
          >
            {isLoading && (
              <span className="flex items-center gap-2">
                <ImSpinner10 className="animate-spin" /> <p>Sending...</p>
              </span>
            )}

            {!isLoading && 'Send'}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ResendOtpModal;
