import React from "react";
import { Link } from "react-router-dom";
import { User2, LogOut } from 'lucide-react' ;
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import store from "../../redux/store";

const Navbar = () => {
  // const user = true;
  const {user} = useSelector(store=>store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center  justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]"> Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/jobs'>Jobs</Link></li>
            <li> <Link to='/browse'>Browse</Link></li>
          </ul>
          {
            !user ? (
              <div className="flex items-center gap-2">
                <Link to={"/login"}><Button variant="outline">Login</Button></Link>
                <Link to={"/signup"}><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">SignUp</Button></Link>
              </div>
            ) : (
              <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    </Avatar>

                    <div>
                        <h4 className="font-medium">Aman Mern Stack</h4>
                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2/>
                    <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut/>
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
            </PopoverContent>
          </Popover>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
