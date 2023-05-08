import { GamesHistory } from './ui-components/GamesHistory/GamesHistory'
import { ProfileStat } from './ui-components/ProfileStat/ProfileStat'

export default function Page() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 order-last xl:order-first xl:col-span-8">
                <GamesHistory/>
            </div>
            <div className="col-span-12 xl:col-start-9 col-end-13">
                <ProfileStat/>
            </div>
        </div>
    )
}
