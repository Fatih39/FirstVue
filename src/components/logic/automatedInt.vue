<script setup>
import gsap from 'gsap';

defineProps({
    val : {
        type : Number,
        required : true,    
    }
})

Vue.component('animate-integer', {
  template: '<span>{{displayValue}}</span>',
  props: { value: { default: 0 } },

  data() {
    return {
      displayValue: this.value,
      tweenValue: this.value
    };
  },

  watch: {
    value() {
      gsap.to(this, {
        tweenValue: this.value,
        onUpdate: () => {
          this.displayValue = Math.ceil(this.tweenValue);
        }
      });
    }
  }
});

</script>