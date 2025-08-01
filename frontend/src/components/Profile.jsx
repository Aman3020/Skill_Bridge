import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button} from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'

const skills = ["html", "javascript", "C++"]

const Profile = () => {
    const [open, setOpen] = useState(false);
    const isResume = true;
    return <div>
       <Navbar/>
       <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24">
                    <AvatarImage src="https://aman-responsive-portfolio.netlify.app/assets/img/home-perfil.jpg"/>
                    <h1></h1>
                </Avatar>
                <div>
                    <h1 className="font-medium text-xl">Full Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente molestiae tenetur quos laborum? Laborum?</p>

                </div>
            </div>
            <Button onClick={() =>setOpen(true)} className="text-right" variant="outline"><Pen/></Button>
        </div>

        <div className="my-5">
            <div className="flex items-center gap-3 my-2">
                <Mail/>
                <span>aman03singh@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 my-2">
                <Contact/>
                <span>567898767</span>
            </div>
        </div>
        <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1">
                {
                    skills.length != 0 ? skills.map((item, index)=><Badge key={index}>{item}</Badge>) : <span>NA</span>

                }
            </div>
        </div>
        <div className="grid w-full max-w-sm items center gap-1 5">
            <Label className="text-md font-bold">Resume</Label>
            {
                isResume ? <a target='blank' href='' className='text-blue-500 w-full hover:underline cursor-pointer'>Resume</a> : <span>NA</span>
            }
        </div>
        
       </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
            <h1 className='text-bold text-lg my-5'>Applied Jobs</h1>
            {
                // Application Table
                <AppliedJobTable/>
            }
        </div>
        <UpdateProfileDialog open = {open} setOpen = {setOpen}/>
    </div>
  
}

export default Profile
