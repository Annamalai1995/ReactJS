import './Mycss.css'

export const Custom=()=>
{
    const match={
        borderRadius:'50px',
    }
    return(
        <>
        <a href="http://www.oracle.com">oracle</a>
        <table style={match}>
            <thead>
                <tr>
                <th>StudentContectNumber</th>
                <th>StudentName</th>
                <td>StudentDepartment</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>987654456788</td>
                    <td>Manojkumar</td>
                    <td>BCA</td>
                </tr>
                <tr>
                    <td>765456776876</td>
                    <td>Annamalai</td>
                    <td>CSE-BE</td>
                </tr>
            </tbody>
        </table>
        </>

    );
}