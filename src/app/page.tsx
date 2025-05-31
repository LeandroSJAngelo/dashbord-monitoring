import { Paths } from "@/routes/paths";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(Paths.login)
}
