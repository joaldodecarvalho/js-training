import { simpleCallback, simplePromise } from './callbacks';

test('simple callback', () => {
    const result = simpleCallback(value => `Callback with value: ${value} was called`);
    expect(result).toEqual('Callback with value: My first callback was called');
});

test('simple callback with default value', () => {
    const result = simpleCallback();
    expect(result).toEqual('Empty callback');
});

/**
 * Segundo exemplo encadeando vários callbacks
 */
test('callback hell', () => {

    simpleCallback(firstResult => {
        console.log('First result: ', firstResult);
        simpleCallback(secondResult => {
            console.log('Second result: ', secondResult);
            simpleCallback(thirdResult => {
                console.log('Third result: ', thirdResult);
                simpleCallback(fourthResult => {
                    console.log('Fourth result: ', fourthResult);
                });
            });
        });
    });
});
