"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ProjectSelectionDialogProps {
  onMainProjectsClick: () => void
  children: React.ReactNode
}

export default function ProjectSelectionDialog({ onMainProjectsClick, children }: ProjectSelectionDialogProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleMainProjectsClick = () => {
    setOpen(false)
    onMainProjectsClick()
  }

  const handleAllProjectsClick = () => {
    setOpen(false)
    router.push("/projects")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>View Projects</DialogTitle>
          <DialogDescription>Choose which projects you would like to view.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <Button onClick={handleMainProjectsClick} className="w-full">
            Featured Projects
          </Button>
          <Button onClick={handleAllProjectsClick} variant="outline" className="w-full">
            All Projects
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
