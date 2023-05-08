import Image from 'next/image'

export function BestCards() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/*  First place (use gold border of card)  */}
            <div className="card border-2 border-yellow-400 shadow-xl">
                <figure>
                    <Image src="https://avatars.githubusercontent.com/u/1" alt="winner_image" width={30} height={30} />
                </figure>
                {/*<div className="p-6">*/}
                {/*    <div className="flex items-center">*/}
                {/*        <div className="flex-shrink-0">*/}
                {/*            <img className="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/1" alt=""/>*/}
                {/*        </div>*/}
                {/*        <div className="ml-4">*/}
                {/*            <div className="text-sm font-medium text-gray-900">mojombo</div>*/}
                {/*            <div className="text-sm text-gray-500">1st place</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

/**
 * <div className="card w-96 bg-base-100 shadow-xl">
 *   <figure className="px-10 pt-10">
 *     <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
 *   </figure>
 *   <div className="card-body items-center text-center">
 *     <h2 className="card-title">Shoes!</h2>
 *     <p>If a dog chews shoes whose shoes does he choose?</p>
 *     <div className="card-actions">
 *       <button className="btn btn-primary">Buy Now</button>
 *     </div>
 *   </div>
 * </div>
 *
 */
