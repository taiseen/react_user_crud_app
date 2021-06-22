const About = () => {
    return (
        <div className="container">
            <h1 className="py-4">Learning Context From This Project</h1>
            <ol className="list-group mb-5">
                <li className="list-group-item">Link .vs NavLink <strong>(exact)</strong></li>
                <li className="list-group-item">PageNotFound FullScreen tricks | Custom CSS</li>
                <li className="list-group-item">Yarn base project + JSON Server needful concept</li>
                <li className="list-group-item">Run <strong>multiple script</strong> at same time ( React + JSON Server )
                    <ul>
                        <li>yarn add concurrently</li>
                        <li>package.json --> script
                            <ul>
                                <li><strong>"json-server":</strong> "json-server --watch <strong>./src/db/</strong>db.json --port 8000"</li>
                                <li><strong>"start:dev":</strong> "concurrently \"yarn <strong>start</strong>\" \"yarn run <strong>json-server</strong>\""</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="list-group-item">array of objects | data list <strong>reverse()</strong> order</li>
                <li className="list-group-item">input system | <strong>name</strong> attribute <u>become object property</u></li>
                <li className="list-group-item"><strong>onChange</strong> event | make a common function & pass event Object</li>
                <li className="list-group-item">setUser(<strong>{` ...user , [e.target.name] : e.target.value `}</strong>)</li>
                <li className="list-group-item"> export const <strong>baseURL</strong> = 'http://localhost:8000/users/' </li>
                <li className="list-group-item">await axios<strong>.get</strong>( baseURL )</li>
                <li className="list-group-item">await axios<strong>.get</strong>( baseURL + id )</li>
                <li className="list-group-item">await axios<strong>.post</strong>( baseURL + id , <strong>object</strong> )</li>
                <li className="list-group-item">await axios<strong>.put</strong>( baseURL + id )</li>
                <li className="list-group-item">await axios<strong>.delete</strong>( baseURL + id )</li>
            </ol>
        </div>
    );
};

export default About;