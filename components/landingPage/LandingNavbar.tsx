import { Search } from "lucide-react"
import LogInButton from "./buttons/LogInButton"
import SignInButton from "./buttons/SignInButton"

export const LandingNavBar = () =>{
    return (
        <nav>
            <SkillTreeButton/>
            <AboutUsButton/>
            <Communities/>
            <Search/>
            <LogInButton/>
            <SignInButton/>
        </nav>
    )

}