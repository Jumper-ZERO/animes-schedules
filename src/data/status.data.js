const STATUS = {
    current: "En emisión",
    finished: "Finalizado",
    upcoming: "Próximamente",
    tba: "Por confirmar",
    unreleased: "No publicado"
}

export default function whichIsTheStatus(state) {
    return STATUS[state]
}