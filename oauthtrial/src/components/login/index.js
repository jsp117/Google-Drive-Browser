export default function Login() {

    function google(){

    }
    function facebook(){

    }
    
    return (
        <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Login Using Google or Facebook
    </h3>                
                <div class="mt-5">
                    <button onClick={google} class="mx-5 inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">Login With Google</button>
                    <button class="mx-5 inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">Login With Facebook</button>
                </div>
            </div>
        </div>
    )
}