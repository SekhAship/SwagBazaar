import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
      <>
          <Button
              type="button"
              onClick={handleOpen}
              className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
          >
              Buy now
          </Button>
          <Dialog open={open} handler={handleOpen} className=" bg-pink-50">
              <DialogBody className="">
                  <div className="mb-3">
                      <input
                          type="text"
                          name="name"
                          placeholder='Enter your name'
                          className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                      />
                  </div>
                  <div className="mb-3">
                      <input
                          type="text"
                          name="address"
                          placeholder='Enter your address'
                          className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                      />
                  </div>

                  <div className="mb-3">
                      <input
                          type="number"
                          name="pincode"
                          placeholder='Enter your pincode'
                          className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                      />
                  </div>

                  <div className="mb-3">
                      <input
                          type="text"
                          name="mobileNumber"
                          placeholder='Enter your mobileNumber'
                          className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                      />
                  </div>

                  <div className="">
                  <Button
              type="button"
              onClick={handleOpen}
              className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
          >
              Buy now
          </Button>
                  </div>

              </DialogBody>
          </Dialog>
      </>
  );
}

export default BuyNowModal;