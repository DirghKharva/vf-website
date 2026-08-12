from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = 'vf-agri-export-dev-secret-key-change-in-production'
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


# ── Home ──────────────────────────────────────────────────────────────
@app.route('/')
def home():
    return render_template('index.html', active_page='home')


# ── About ─────────────────────────────────────────────────────────────
@app.route('/about')
def about():
    return render_template('about.html', active_page='about')


# ── Products Overview ─────────────────────────────────────────────────
@app.route('/products')
def products():
    return render_template('products.html', active_page='products')


# ── Product Categories ────────────────────────────────────────────────
@app.route('/products/fresh-vegetables')
def fresh_vegetables():
    return render_template('fresh_vegetables.html', active_page='products')


@app.route('/products/fresh-fruits')
def fresh_fruits():
    return render_template('fresh_fruits.html', active_page='products')


@app.route('/products/salt')
def salt():
    return render_template('salt.html', active_page='products')


# ── Catalogue ─────────────────────────────────────────────────────────
@app.route('/catalogue')
def catalogue():
    return render_template('catalogue.html', active_page='catalogue')


# ── Contact ───────────────────────────────────────────────────────────
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip()
        message = request.form.get('message', '').strip()

        if not name or not email or not message:
            flash('Please fill in all required fields.', 'error')
        else:
            # TODO: Wire up email sending in production
            flash(
                f'Thank you, {name}! Your enquiry has been received. '
                'We will get back to you within 24 hours.',
                'success'
            )
            return redirect(url_for('contact'))

    return render_template('contact.html', active_page='contact')


# ── 404 ───────────────────────────────────────────────────────────────
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True)
