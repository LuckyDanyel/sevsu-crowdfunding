import { Ref, ComputedRef, unref, computed, toRefs } from 'vue';

interface IPaginationValues<T> {
    items: ComputedRef<T[]>;
    numberPage: Ref<number>;
    limitation: number;
}


export default function<T>(props: IPaginationValues<T>) {
    const {  numberPage, items } = toRefs(props)
    const { limitation } = props;

    const itemsByPagination = computed(() => {
        const itemsScope = [];
        const start = unref(numberPage) === 1 ? 0 : ((unref(numberPage) - 1) * limitation);
        for(let i = start; i < limitation * unref(numberPage); i++) {
            const item = unref(items)[i];
            if(item) {
                itemsScope.push(item);
            }
        }
        return itemsScope;
    });

    const lengthByLimitation = computed(() => Math.ceil(unref(items).length / limitation))

    return {
        itemsByPagination,
        lengthByLimitation,
    }
}