import Image from 'next/image'

export function ProfileStat() {
    return (
        <div className="w-full stats stats-vertical shadow">

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar online">
                        <div className="w-16 rounded-full">
                            <Image width={10} height={10} src="https://theithacan.org/wp-content/uploads/2019/12/Ping-Pong-5_Alison-True.jpg" alt="profile_image"/>
                        </div>
                    </div>
                </div>

                <div className="stat-title">
                    Taras Osyka
                </div>
                <div className="stat-value text-primary">
                    Professional
                </div>
                <div className="stat-desc">
                    21&apos;s place in leaderboard
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">
                    Until next level
                </div>

                <div className="stat-value">
                    <progress className="progress w-100" value="56" max="100"></progress>
                </div>

                <div className="stat-desc flex justify-between">
                    <div>Level 21</div>
                    <div>Level 22</div>
                </div>
            </div>

            <div className="stat">
                <div className="stat-figure text-primary">
                    <Image src="/trophy.svg" alt="trophy" width={40} height={40}/>
                </div>

                <div className="stat-title">
                    Wins percentage
                </div>
                <div className="stat-value text-secondary">
                    86%
                </div>
                <div className="stat-desc">
                    21 wins streak
                </div>
            </div>

            <div className="stat">
                <div className="stat-figure">
                    <Image src="/clock.svg" alt="clock" width={40} height={40}/>
                </div>

                <div className="stat-title">Hours this month</div>
                <div className="stat-value">5.6 h.</div>
                <div className="stat-desc">21% more than last month</div>
            </div>

        </div>
    )
}
