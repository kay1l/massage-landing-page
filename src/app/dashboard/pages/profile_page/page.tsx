"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Pencil,
  Settings,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DashboardHeader from "@/custom_components/dashboard_section/Header";
import DashboardFooter from "@/custom_components/dashboard_section/Footer";
import LoadingScreen from "@/custom_components/LoadingScreen";
import { withAuth } from "@/hoc/withAuth";
import DashboardSidebar from "@/custom_components/dashboard_section/dashboard_sidebar";

 function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Kyle Gomez",
    email: "kyle@example.com",
    phone: "+63 912 345 6789",
    address: "Manila, Philippines",
    memberSince: "July 2023",
  });
     const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    
      if (isLoading) return <LoadingScreen />;
  const handleChange = (key: string, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-[#FEF3E2] text-[#5C4A42] pt-24 px-4 md:px-10">
      <DashboardHeader />
      <DashboardSidebar />
      <div className="max-w-5xl mx-auto mt-10 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#FA812F] tracking-tight">My Profile</h1>
            <p className="text-base text-[#5C4A42] mt-1">Manage your account details</p>
          </div>
          <Button
            className="bg-[#FA812F] hover:bg-[#f5933c] text-base px-6 py-2"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Pencil className="mr-2 h-5 w-5" />
            {isEditing ? "Done" : "Edit Profile"}
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="bg-white shadow-lg border rounded-xl">
          <CardHeader className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-0">
            <Image
              src="/images/therapist_images/man1.png"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full border-4 border-[#FA812F] shadow-md"
            />
            <div className="text-center md:text-left">
              <CardTitle className="text-2xl font-semibold text-[#5C4A42]">
                {profile.name}
              </CardTitle>
              <p className="text-base text-gray-500 mt-1">Premium Member</p>
            </div>
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            <Field
              icon={User}
              label="Full Name"
              value={profile.name}
              editable={isEditing}
              onChange={(val) => handleChange("name", val)}
            />
            <Field
              icon={Mail}
              label="Email"
              value={profile.email}
              editable={isEditing}
              onChange={(val) => handleChange("email", val)}
            />
            <Field
              icon={Phone}
              label="Phone"
              value={profile.phone}
              editable={isEditing}
              onChange={(val) => handleChange("phone", val)}
            />
            <Field
              icon={MapPin}
              label="Address"
              value={profile.address}
              editable={isEditing}
              onChange={(val) => handleChange("address", val)}
            />
            <Field
              icon={Calendar}
              label="Member Since"
              value={profile.memberSince}
              editable={false}
            />
            <div className="flex items-start gap-3">
              <Settings className="text-[#FA812F] w-6 h-6 mt-1" />
              <div>
                <p className="text-base font-medium">Account Settings</p>
                <Button variant="link" className="p-0 h-auto text-[#FA812F] text-sm underline">
                  Manage Preferences
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
      </div>
    
    </div>
    
  );
}

function Field({
  icon: Icon,
  label,
  value,
  editable,
  onChange,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  editable: boolean;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="text-[#FA812F] w-6 h-6 mt-1" />
      <div className="w-full">
        <p className="text-base font-semibold mb-1">{label}</p>
        {editable && onChange ? (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-10 text-base border-[#FA812F]/50 focus:border-[#FA812F] focus:ring-0"
          />
        ) : (
          <p className="text-base text-gray-600">{value}</p>
        )}
      </div>
      
    </div>
  );
}
export default withAuth(ProfilePage);