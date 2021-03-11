export default function Login() {

    function google() {
        console.log("google login");
    }
    function facebook() {

    }

    return (
        <div className="container mx-auto grid grid-cols-3">
            <div></div>
            <div className="mt-40 bg-white shadow sm:rounded-lg object-center">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Login Using Google or Facebook
    </h3>
                    <div className="mt-5">
                        <button onClick={google} className="mx-5 my-5 inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">Login With Google</button>
                        <button className="mx-5 inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">Login With Facebook</button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}