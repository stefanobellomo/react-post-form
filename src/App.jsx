import { useState } from "react"
function App() {

    const apiForm = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

    const [infoUser, setInfoUser] = useState(
        {
            "author": "",
            "title": "",
            "body": "",
            "public": true,
        }
    )


    return (
        <>
            <div className="container mt-4">
                <h2>Richiesta apertura Ticket</h2>
                <form className="p-4 border rounded bg-light">
                    {/* Nome */}
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={infoUser.author}
                            required
                        />
                    </div>
                    {/* Titolo richiesta */}
                    <div className="mb-3">
                        <label className="form-label">Titolo richiesta</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={infoUser.title}
                            required
                        />
                    </div>
                    {/* Descrizione problema */}
                    <div className="mb-3">
                        <label className="form-label">Descrizione del problema</label>
                        <textarea
                            name="description"
                            className="form-control"
                            rows="4"
                            value={infoUser.body}
                            required
                        />
                    </div>
                    {/* Checkbox aggiornamenti */}
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            name="public"
                            id="public"
                            className="form-check-input"
                            checked={infoUser.public}
                        // onChange={(e) => setInfoUser({ ...infoUser, public: e.target.checked })}
                        />
                        <label className="form-check-label" htmlFor="updates">Desideri che venga pubblicato (check) o che resti una bozza (lascia libero il campo)?</label>
                    </div>
                    {/* Pulsante di invio */}
                    <button type="submit" className="btn btn-primary">Invia richiesta</button>
                </form>
            </div>
        </>
    )
}
export default App