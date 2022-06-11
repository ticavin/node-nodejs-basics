export const parseArgs = () => {
    const args = process.argv.slice(2);
    const cliArgs = args.reduce((acc, arg, index, arr) => {
        const value = arr[index+1];
        if(value && arg.startsWith('--')){
            const tranform = arg.slice(2)
            const cliTransfrom = `${tranform} is ${value}`;
            acc.push(cliTransfrom);
        }
        return acc;
    }, [])
    console.log(cliArgs.join(', '))
};

parseArgs();
