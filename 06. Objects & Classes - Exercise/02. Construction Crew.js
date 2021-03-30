function modifyWorker(worker) {

    if (worker.dizziness == true) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    console.log(worker);
}

modifyWorker({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
)