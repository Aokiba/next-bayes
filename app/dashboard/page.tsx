
import Link from "next/link"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export  default function Component() {
  return (
    <div className="grid min-h-screen antialiased text-gray-900 md:text-sm text-gray-900/90 dark:text-gray-100/90 dark:text-gray-100">
      <div className="flex flex-col h-screen">
        <header className="flex items-center h-16 px-4 border-b md:px-6">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
            Acme Inc
          </Link>
        </header>
        <div className="flex flex-1">
          <nav className="hidden gap-1 text-sm w-[200px] border-r pt-2 md:flex flex-col items-start">
            <Link className="flex items-center gap-3 text-gray-500 font-medium rounded-md" href="#">
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link className="flex items-center gap-3 text-gray-900 font-medium rounded-md" href="#">
              <UsersIcon className="h-4 w-4" />
              Users
            </Link>
            <Link className="flex items-center gap-3 text-gray-500 font-medium rounded-md" href="#">
              <PackageIcon className="h-4 w-4" />
              Products
            </Link>
            <Link className="flex items-center gap-3 text-gray-500 font-medium rounded-md" href="#">
              <ShoppingBagIcon className="h-4 w-4" />
              Orders
            </Link>
            <Link className="flex items-center gap-3 text-gray-500 font-medium rounded-md" href="#">
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </nav>
          <div className="flex-1 p-4 md:p-6">
            <div className="flex items-center gap-4 md:gap-2">
              <UsersIcon className="rounded-lg box-border border-gray-200 h-8 w-8 dark:border-gray-800" />
              <h1 className="text-lg font-semibold md:text-2xl">Users</h1>
            </div>
            <div className="grid gap-4 md:gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="overflow-auto">
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="min-w-[120px]">Name</TableHead>
                          <TableHead className="min-w-[200px]">Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-gray-100 rounded-lg dark:bg-gray-800">
                          <TableCell className="font-medium">Alice</TableCell>
                          <TableCell>alice@example.com</TableCell>
                          <TableCell>Admin</TableCell>
                          <TableCell className="text-right">
                            <Button className="w-6 h-6 rounded-full" size="icon" variant="outline">
                              <FileEditIcon className="w-4 h-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                     </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FileEditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}



// === layout.jsx ===

// // This is the root layout component for your Next.js app.
// // Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

// import { Rethink_Sans } from 'next/font/google'
// import { Fira_Mono } from 'next/font/google'
// import './styles.css'

// const rethink_sans = Rethink_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-rethink_sans',
// })
// const fira_mono = Fira_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-fira_mono',
// })

