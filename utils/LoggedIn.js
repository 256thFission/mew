const LoggedIn = () => {
    const { authUser, loading } = useAuth();
    const router = useRouter();

    // Listen for changes on loading and authUser, redirect if needed
    useEffect(() => {
        if (!loading && !authUser)
            router.push('/')
    }, [authUser, loading])

    return (
        //Your logged in page
    )
}

export default LoggedIn;