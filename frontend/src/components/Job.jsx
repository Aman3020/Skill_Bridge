import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-cneter justify-between">
        <p className="text-sm text-gray-500">2 Days ago</p>
        <Button className="rounded-full" variant="outline" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930" />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi
          reiciendis fugiat voluptatem minus unde.
        </p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
              <Badge className="text-blue-700 font-bold" variant="ghost">12 Positions</Badge>
              <Badge className="text-[#F83002] font-bold" variant="ghost">Part Time</Badge>
              <Badge className="text-[#7209B7] font-bold" variant="ghost">24 LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">
          Details
        </Button>
        <Button className="bg-[#7209b7]">
          Save for later
        </Button>
      </div>
    </div>
  );
};

export default Job;
