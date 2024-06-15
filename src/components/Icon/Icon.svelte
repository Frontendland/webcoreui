<script>
    export let type
    export let size = 24
    export let color

    const icon = () => import(`../../icons/${type}.js`)
</script>

{#await icon() then module}
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color={color}
    >{@html module.default}</svg>
{/await}

