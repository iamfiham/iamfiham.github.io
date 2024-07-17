import { FiMusic } from "react-icons/fi";

function TagCard() {
    return (
        <div className="relative cursor-pointer rounded-xl border-2 border-solid border-neutral-800 px-6 py-2 transition-all hover:bg-neutral-900">
            <span className="absolute left-6 top-0 inline-block -translate-y-1/2 rounded-full border-2 border-solid border-neutral-800 bg-neutral-900 px-4 py-[2px] text-sm/none font-medium text-neutral-100">
                Music
            </span>
            <div className="flex items-center">
                <span className="p-4">
                    <FiMusic className="stroke-neutral-100 text-2xl" />
                </span>
                <div className="p-4">
                    <h2 className="mb-2 text-base/none font-medium text-neutral-100">Nothing right now</h2>
                    <p className="text-sm/none text-neutral-500">I'm not currently listening to any music</p>
                </div>
            </div>
        </div>
    );
}

export default TagCard;
