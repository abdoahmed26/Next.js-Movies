import { option } from "@/lib/optionAuth"
import NextAuth from "next-auth"

const handler = NextAuth(option)

export { handler as GET, handler as POST }