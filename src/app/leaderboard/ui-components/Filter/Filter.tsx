export function Filter() {
    return (
        <div className="navbar rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                <button className="btn btn-outline btn-active">Month time</button>
                <button className="btn btn-outline">League</button>
                <button className="btn btn-outline">Level</button>
                <button className="btn btn-outline">Wins percentage</button>
            </div>
        </div>
    )
}
