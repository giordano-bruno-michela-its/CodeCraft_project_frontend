import { Login, OfficalEmail, RegistrationUser } from "../Types/types";

export async function submitLoginForm(formData: Login): Promise<void> {
    console.log(JSON.stringify(formData));

    const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || 'Errore sconosciuto'}`);
    }

    const data = await response.json();
    sessionStorage.setItem('authToken', data.accessToken);
    console.log(data.accessToken);

    /* window.location.href = '/src/Pages/dashboard.html'; */
    window.location.href = '../Pages/dashboard.html';


    return data;
}


export async function getAllForms(token: string): Promise<void> {
    console.log(token);

    const response = await fetch('http://localhost:8080/api/formreq/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()
    console.log(data);
    return data
}



export async function submitRegistrationUserForm(formData: RegistrationUser): Promise<string> {
    console.log(JSON.stringify(formData));

    const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || 'Errore sconosciuto'}`);
    }

    const data = await response.text();
    window.location.href = '../Pages/dashboard.html';

    return data;
}


export async function submitRegistrationOfficialMailForm(formData: OfficalEmail, token:string): Promise<void> {
    console.log(JSON.stringify(formData));
    console.log(formData.email);
    

    const requestBody = {
        "id": 1,
    "noReplyEmail": formData.email,
    "noReplyPassword": "vwiwpzvtuypoinuo",
    "adminEmail": formData.email
    };

    console.log(JSON.stringify(requestBody));


    const response = await fetch('http://localhost:8080/api/admin/updateMail', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || 'Errore sconosciuto'}`);
    }

    const data = await response.json();
    // window.location.href = '/src/Pages/dashboard.html';

    return data;
}


export async function submitPrenotation(formData: any, token: string) {
    console.log(JSON.stringify(formData));
    console.log(token);


    const response = await fetch(`http://localhost:8080/api/formreq/updatebookingnomail/${formData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || 'Errore sconosciuto'}`);
    }


    return response;


}

export async function verifyAuth() {

    const response = await fetch('http://localhost:8080/api/auth/has-users');

    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Errore nella richiesta: ${response.status} - ${errorDetails.message || 'Errore sconosciuto'}`);
    }

    const data = await response.json();

    return data;
}




export async function checkAdmin(token: string): Promise<any> {
    console.log(token);

    const response = await fetch('http://localhost:8080/api/admin', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })



    return response;

}



export async function downloadEmail(token: string): Promise<any> {
    console.log(token);

    const response = await fetch('http://localhost:8080/api/emails/newsletter/file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "format": "txt"
        })
    })
    console.log(response);


    if (!response.ok) {
        throw new Error(`Errore durante il download: ${response.statusText}`);
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const contentDisposition = response.headers.get('Content-Disposition');
    const filename = contentDisposition?.match(/filename="(.+)"/)?.[1] || 'newsletter.txt';

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    console.log('File scaricato con successo');



    return response;


}
