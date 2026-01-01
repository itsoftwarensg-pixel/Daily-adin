import { FiAlertCircle } from "react-icons/fi";

const NoContentFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <FiAlertCircle className="text-6xl text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
                দুঃখিত!
            </h3>
            <p className="text-gray-500">
                এই মুহূর্তে কোনো তথ্য পাওয়া যায়নি।
            </p>
        </div>
    );
}

export default NoContentFound;