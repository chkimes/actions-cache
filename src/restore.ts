import restoreImpl from "./restoreImpl";
import { StateProvider } from "./stateProvider";

async function run(): Promise<void> {
    try {
        await restoreImpl(new StateProvider());
    } catch (err) {
        console.error(err)
        process.exit(1)
    }

    process.exit(0)
}

run();

export default run;
