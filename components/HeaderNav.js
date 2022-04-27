import Link from 'next/link'

export default function HeaderNav () {
    return (
        <>
        <div className="containerHeaderNav">
            <Link href="/"><a><h1 className="titlePage">Thinky App</h1></a></Link>
            <h3 className="descPage muted">Expresa tus ideas mediante textos anonimos globales!</h3>
        </div>
        </>
    )
}