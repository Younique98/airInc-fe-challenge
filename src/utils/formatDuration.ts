export const formatDuration = ( seconds: number ) => {
    const minutes = Math.floor( seconds / 60 )
    const secs = Math.floor( seconds % 60 )
    return `${ minutes }:${ secs.toString().padStart( 2, '0' ) }`
}