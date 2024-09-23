import React from "react";

function MiCompPolitica() {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: '20px',
            padding: '20px',
            backgroundColor: '#f4f4f4',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        title: {
            color: '#333',
            fontSize: '24px',
            marginBottom: '10px',
        },
        paragraph: {
            color: '#555',
            fontSize: '16px',
            lineHeight: '1.6',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Remaniement Actual en Francia</h2>
            <p style={styles.paragraph}>
                En los últimos días, el presidente francés ha anunciado un remaniement
                del gobierno que busca abordar los desafíos actuales del país. Este
                cambio en el gabinete incluye la designación de nuevos ministros
                que aportan diferentes enfoques y experiencias a la administración.
            </p>
            <p style={styles.paragraph}>
                La intención detrás de este remaniement es revitalizar la agenda política,
                mejorar la comunicación con los ciudadanos y fortalecer la respuesta del
                gobierno a cuestiones cruciales como la economía, la salud y el medio ambiente.
            </p>
            <p style={styles.paragraph}>
                A medida que Francia se enfrenta a desafíos significativos, este remaniement
                podría ser una oportunidad para implementar reformas necesarias y restaurar la
                confianza del público en las instituciones gubernamentales.
            </p>
            <p style={styles.paragraph}>
                Los próximos días serán cruciales para observar cómo se desarrollan estos cambios
                y si efectivamente logran mejorar la situación en el país.
            </p>
        </div>
    );
}


export default MiCompPolitica

