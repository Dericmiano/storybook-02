function Loading() {

    return(
        <div className="text-color white py-3 px-3">
            <button type="button" className="bg-indigo-500 border border-gray-700 rounded-lg px-3 py-3" disabled>
                <svg className="motion-reduce:hidden animate-spin h-5 w-5 mr-3 py-3 px-3" viewBox="0 0 24 24"></svg>
                Processing...
            </button>
        </div>
    )

}
export default Loading