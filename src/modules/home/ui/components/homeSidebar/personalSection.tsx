"use client";

import Link from "next/link";


import {
    HistoryIcon,
    ListVideoIcon,
    ThumbsUpIcon
} from "lucide-react";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroupLabel
} from "@/components/ui/sidebar";
import { useAuth, useClerk } from "@clerk/nextjs";

const items = [
    {
        title: "History",
        url: "/playlists/history",
        icon: HistoryIcon,
        auth: true,
    },
    {
        title: "Liked Videos",
        url: "/playlists/liked",
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: "All Playlists",
        url: "/playlists",
        icon: ListVideoIcon,
        auth: true,
    }
]

export const PersonalSection = () => {
    const { isSignedIn } = useAuth()
    const  clerk  = useClerk()

    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                You
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) =>(
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false} //make it look at the current path to decide whether a button should be active
                                onClick={(e) => {
                                    if (!isSignedIn && item.auth){
                                        e.preventDefault();
                                        return clerk.openSignIn();
                                    }
                                }}
                            >
                                <Link href={item.url} className="flex items-center gap-4">
                                    <item.icon/>
                                    <span className="text-small">
                                        {item.title}
                                    </span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

