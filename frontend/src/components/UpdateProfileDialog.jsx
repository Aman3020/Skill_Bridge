import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/authSlice";
import { USER_API_END_POINT } from "../utils/constant";


const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(store=>store.auth);

  const [input, setInput] = useState({
    fullname:user?.fullname || "",
    email:user?.email || "",
    phoneNumber:user?.phoneNumber || "",
    bio:user?.profile?.bio || "",
    skills:user?.profile?.skills?.map(skill => skill) || "",
    file:user?.profile?.resume || ""
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) =>{
    setInput({...input, [e.target.name]: e.target.value});
  }

  const fileChangeHandler = (e) =>{
    const file = e.target.files?.[0];
    setInput({...input, file});
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    console.log("hi from frontend");
    console.log("bii");
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if(input.file){
      formData.append("file", input.file);
    }
    
    try{
      const res =  await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers:{
          'Content-Type':'multipart/form-data'
        },withCredentials:true
      });
      
      if(res.data.success){
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    }catch(error){
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
    setOpen(false);
  }
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname">Name</Label>
                <Input type="text" id="fullname" value={input.fullname} onChange={changeEventHandler} name="fullname" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" onChange={changeEventHandler} value={input.email} name="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber">Number</Label>
                <Input id="phoneNumber" onChange={changeEventHandler} value={input.phoneNumber} name="phoneNumber" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" onChange={changeEventHandler} name="bio" value={input.bio} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills">Skills</Label>
                <Input id="skills" onChange={changeEventHandler} value={input.skills} name="skills" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file">Resume</Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full my-4">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
