import { useState } from "react"
import axios from "axios"

function App() {

    const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

    const initialFormData =
    {
        "author": "",
        "title": "",
        "body": "",
        "public": true,
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleSubmit(e) {
        e.preventDefault()

        axios.post(endpoint, formData, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log(response);
                setFormData(initialFormData)
            })
    }

    return (
        <>
            <div className="container mt-4">
                <h2>Richiesta apertura Ticket</h2>
                <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
                    {/* Nome */}
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.author}
                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
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
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </div>
                    {/* Descrizione problema */}
                    <div className="mb-3">
                        <label className="form-label">Descrizione del problema</label>
                        <textarea
                            name="body"
                            className="form-control"
                            rows="4"
                            value={formData.body}
                            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
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
                            checked={formData.public}
                            onChange={(e) => setFormData({ ...formData, public: e.target.checked })}
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