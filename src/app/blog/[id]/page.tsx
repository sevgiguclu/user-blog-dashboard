export default function BlogDetailPage({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>blog detay - {params.id} </h1>
            <p>bu sayfada {params.id} gosterilecektir </p>
        </div>        
    );
}
