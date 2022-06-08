import React from 'react'
import ProviderForm from './ProviderForm';


function ProviderList(
    
) {

    return (<div>
        <table>
            <thead>
                <tr>
                    <td>Name:</td>
                    <td>Identification:</td>
                    <td>Phone:</td>
                </tr>
            </thead>

            {/*{portafolio.map((entry) => {
                return <tbody key={entry.id}>
                    <tr>
                        <td>{entry.name}</td>
                        <td><a href={entry.url}>{entry.url}</a></td>
                        <td>{entry.description}</td>
                    </tr>
                </tbody>
            })}*/}
        </table>
        <ProviderForm />
    </div>)

}

export default ProviderList