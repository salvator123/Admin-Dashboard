import ThemeToggler from "@/components/ui/ThemeToggler";

const AuthLayout = ({children}:{children: React.ReactNode}) => {
    return ( 
        <div className="h-[100vh] flex items-center justify-center relative">
            {children}
<div className="absolute bottom-5 right-0">
    <ThemeToggler />
</div>
        </div>
     );
}
 
export default AuthLayout;