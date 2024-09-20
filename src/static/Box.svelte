<script>
    import { classNames } from '@utils/classNames'

    export let fullWidth = false

    const classes = classNames([
        fullWidth && 'full'
    ])
</script>

<div class={classes}><slot /></div>

<style lang="scss">
    @import '../scss/config.scss';

    div {
        @include size(80px);
        @include border-radius(sm);
        @include background(primary-50);
        @include border(1px, primary-40);
        @include layout(flex, center);
        @include typography(sm, primary-20);

        &.full {
            @include size('w100%');
        }
    }
</style>
