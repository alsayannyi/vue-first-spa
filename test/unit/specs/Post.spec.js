import Vue from 'vue'
import Post from '@/components/Post'
// import Post from '../../../src/components/Post'

describe('Post.vue', () => {
  const createComponent = () => {
    const PostConstructor = Vue.extend(Post)
    const comp = new PostConstructor({
      propsData: {
        link: 'http://www.pluralight.com'
      }
    }).$mount()
    return comp
  }
  it('should render the link', () => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.pluralight.com')
  })
  it('should upadte element\'s href when property link changes', (done) => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.pluralight.com')

    comp.link = 'http://fullstackweekly.com'
    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
        .to.equal('http://fullstackweekly.com')
      done(0)
    })
  })
})
