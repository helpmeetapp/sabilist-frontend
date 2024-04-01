import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from '@mui/material/Modal';
import { ImSpinner10 } from 'react-icons/im';
import { MdLockOutline } from 'react-icons/md';
import { ChangeEvent, FC, useState } from 'react';

import TextInput from './TextInput';

type VerifyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  openLoginModal: () => void;
  openResendOtpModal: () => void;
};

const VerifyModal: FC<VerifyModalProps> = ({
  isOpen,
  onClose,
  openLoginModal,
  openResendOtpModal,
}) => {
  const [verify, setVerify] = useState({ otp: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleOtpChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVerify((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleOtpVerification = async () => {
    try {
      setIsLoading(true);

      await axios.post(
        `${process.env.REACT_APP_BASE_URI}/auth/otp/verify/`,
        verify,
      );

      // console.log(res.data);

      setVerify({ otp: '' });

      toast.success(
        'Account verification successfull. Please login to access your account.',
        {
          autoClose: 5000,
          position: 'top-right',
          hideProgressBar: true,
          closeOnClick: true,
        },
      );
      openLoginModal();
      onClose();
    } catch (error) {
      setIsLoading(false);

      toast.error(
        'Account verification failed! Confirm that you have entered the correct OTP.',
        {
          autoClose: 5000,
          position: 'top-right',
          hideProgressBar: true,
          closeOnClick: true,
        },
      );
      // console.log(error);
    }
  };
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="bg-[#F8F9FF] absolute w-[95%] md:w-[400px] h-[250px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-4 m-2 text-center">
          <h1 className="text-3xl xl:text-4xl font-bold text-[#009379]">
            Verification
          </h1>

          <div className="flex flex-col items-center justify-center gap-2">
            <small>
              We sent a 6-digit otp verification code to your email.
            </small>

            <div className="">
              <TextInput
                type="text"
                name="otp"
                placeholder="Enter 6-digit OTP"
                value={verify.otp}
                onChange={handleOtpChange}
                iconComponent={<MdLockOutline />}
              />
            </div>
            <small>
              Didn't receive any 6-digit code?{' '}
              <button
                className="underline text-[#009379]"
                onClick={() => {
                  openResendOtpModal();
                  onClose();
                }}
              >
                Resend code
              </button>
              .
            </small>
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
                <ImSpinner10 className="animate-spin" /> <p>Verifying...</p>
              </span>
            )}

            {!isLoading && 'Verify'}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default VerifyModal;
