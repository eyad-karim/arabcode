function CardHead({children,className}) {
    return ( 
        <>
            <div className={`card-head ${className}`}>
                {children}
            </div>
        </>
     );
}

export default CardHead;