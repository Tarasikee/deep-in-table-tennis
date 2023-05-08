export function GamesHistory() {
    return (
        <div>
            <div className="prose">
                <h1>Games history</h1>
            </div>

            <div className="mt-5 overflow-x-auto w-full">
                <table className="table table-fixed w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Opponent</th>
                            <th>Time</th>
                            <th>Your Points</th>
                            <th>Opponent Points</th>
                            <th>Score</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="font-bold truncate">Random guy</div>
                                <div className="text-sm truncate opacity-50">Beginners league</div>
                            </td>
                            <td>
                                <div className="font-bold">14 mins</div>
                            </td>
                            <td>
                                11 points
                            </td>
                            <td>
                                7 points
                            </td>
                            <td>
                                <div className="badge badge-outline">+200xp</div>
                            </td>
                            <td>
                                <div className="badge badge-success gap-2">
                                    win
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="truncate font-bold">Amazing Taras</div>
                                <div className="truncate text-sm opacity-50">Super professional league</div>
                            </td>
                            <td>
                                <div className="font-bold">10 mins</div>
                            </td>
                            <td>
                                3 points
                            </td>
                            <td>
                                11 points
                            </td>
                            <td>
                                <div className="badge badge-outline">-10xp</div>
                            </td>
                            <td>
                                <div className="badge badge-error gap-2">
                                    lost
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="font-bold truncate cursor-pointer">Another
                                    TarasTarasTarasTarasTarasTarasTarasTarasTarasTaras
                                </div>
                                <div className="text-sm truncate opacity-50">Intermediate league</div>
                            </td>
                            <td>
                                <div className="font-bold">13 mins</div>
                            </td>
                            <td>
                                11 points
                            </td>
                            <td>
                                0 points
                            </td>
                            <td>
                                <div className="badge badge-outline">
                                    Not fulfilled
                                </div>
                            </td>
                            <td>
                                <div className="badge badge-warning gap-2">
                                    pending
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="font-bold truncate cursor-pointer">Another
                                    TarasTarasTarasTarasTarasTarasTarasTarasTarasTaras
                                </div>
                                <div className="text-sm truncate opacity-50">Intermediate league</div>
                            </td>
                            <td>
                                <div className="font-bold">13 mins</div>
                            </td>
                            <td>
                                0 points
                            </td>
                            <td>
                                11 points
                            </td>
                            <td>
                                <div className="badge badge-outline">
                                    0xp
                                </div>
                            </td>
                            <td>
                                <div className="badge badge-error gap-2">
                                    rejected
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
