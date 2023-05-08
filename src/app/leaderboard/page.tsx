import { BestCards } from './ui-components/BestCards/BestCards'
import { Filter } from './ui-components/Filter/Filter'

export default function Page() {
    return (
        <div>
            <div className="prose">
                <h1>Leaderboard</h1>
            </div>

            <div className="mt-5">
                <Filter/>
            </div>

            <div className="mt-5">
                <BestCards/>
            </div>

            <div className="mt-5">
                {/*  Here will be all other places as a table  */}
            </div>
        </div>
    )
}
