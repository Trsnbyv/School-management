import LoadingIcon from '../assets/images/loading.gif'
const LogoutModal = ({ show, onClose, onConfirm, isLoading }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
                {isLoading ? (
                    <div className="flex justify-center items-center">
                      
                        <img src={LoadingIcon} alt="Loading..." className='object-cover' />
                    </div>
                ) : (
                    <>
                        <h2 className="text-lg font-semibold mb-4">Do you really want to log out?</h2>
                        <div className="flex justify-end">
                            <button 
                                onClick={onConfirm} 
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none">
                                Yes
                            </button>
                            <button 
                                onClick={onClose} 
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none">
                                No
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LogoutModal;
