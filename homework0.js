//a=[[1,2,3,[4,5,6,[7,8,9,[0]]]]];
//a=[1,[[2,3,[4,5,[8]]]],9,[],8]
a=[[1,2,[3,4]],5,6,[],[[[7]]],[8,[9],[0]]]
b=[]
function flat(arr)
{
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'object' && arr[i].length) { 
            flat(arr[i]);
        } else if(arr[i].length!=0){
            b.push(arr[i]);
        }
    }
}

flat(a);