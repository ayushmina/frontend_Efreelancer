import React from "react";
import "../../Style/codebase.min.css";
const authSignup = () => {
    return (
        <>
            <div id="page-container" class="main-content-boxed">
                <main id="main-container">
                    <div class="bg-image"  style={{
                       backgroundImage:'url("https://media.istockphoto.com/id/1130480436/photo/young-man-talking-on-the-phone-in-his-home-office.jpg?s=612x612&w=0&k=20&c=TvlGfaXVf73TccSnDd3UBviXv5hvsna9XZs0vzDIpQM=")',
                    }}>
                        <div class="row mx-0 bg-earth-op">
                            <div class="hero-static col-md-6 col-xl-8 d-none d-md-flex align-items-md-end">
                                <div class="p-30 invisible" data-toggle="appear">
                                    <p class="font-size-h3 font-w600 text-white mb-5">
                                        We're very happy you are joining our community!
                                    </p>
                                    <p class="font-size-h5 text-white">
                                        <i class="fa fa-angles-right"></i> Create your account today and receive 50% off.
                                    </p>
                                    <p class="font-italic text-white-op">
                                        Copyright &copy; <span class="js-year-copy"></span>
                                    </p>
                                </div>
                            </div>
                            <div class="hero-static col-md-6 col-xl-4 d-flex align-items-center bg-white">
                                <div class="content content-full">
                                    <div class="px-30 py-10">
                                        <a class="link-effect font-w700" href="index.html">
                                            <i class="si si-fire"></i>
                                            <span class="font-size-xl text-primary-dark">code</span><span class="font-size-xl">base</span>
                                        </a>
                                        <h1 class="h3 font-w700 mt-30 mb-10">Create New Account</h1>
                                        <h2 class="h5 font-w400 text-muted mb-0">Please add your details</h2>
                                    </div>
                                    <form class="js-validation-signup px-30" action="be_pages_auth_all.html" method="post">
                                        <div class="form-group row">
                                            <div class="col-12">
                                                <div class="form-material floating">
                                                    <input type="text" class="form-control" id="signup-username" name="signup-username" />
                                                    <label for="signup-username">Username</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-12">
                                                <div class="form-material floating">
                                                    <input type="email" class="form-control" id="signup-email" name="signup-email" />
                                                    <label for="signup-email">Email</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-12">
                                                <div class="form-material floating">
                                                    <input type="password" class="form-control" id="signup-password" name="signup-password" />
                                                    <label for="signup-password">Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-12">
                                                <div class="form-material floating">
                                                    <input type="password" class="form-control" id="signup-password-confirm" name="signup-password-confirm" />
                                                    <label for="signup-password-confirm">Password Confirmation</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-12">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="signup-terms" name="signup-terms" />
                                                    <label class="custom-control-label" for="signup-terms">I agree to Terms &amp; Conditions</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-sm btn-hero btn-alt-success">
                                                <i class="fa fa-plus mr-10"></i> Create Account
                                            </button>
                                            <div class="mt-30">
                                                <a class="link-effect text-muted mr-10 mb-5 d-inline-block" href="#" data-toggle="modal" data-target="#modal-terms">
                                                    <i class="fa fa-book text-muted mr-5"></i> Read Terms
                                                </a>
                                                <a class="link-effect text-muted mr-10 mb-5 d-inline-block" href="op_auth_signin2.html">
                                                    <i class="fa fa-user text-muted mr-5"></i> Sign In
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <div class="modal fade" id="modal-terms" tabindex="-1" role="dialog" aria-labelledby="modal-terms" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-slidedown" role="document">
                    <div class="modal-content">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Terms &amp; Conditions</h3>
                                <div class="block-options">
                                    <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                        <i class="si si-close"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content">
                                <p>Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur
                                    consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida
                                    fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.</p>
                                <p>Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad
                                    feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo
                                    arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.</p>
                                <p>Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna
                                    accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu
                                    erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-alt-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-alt-success" data-dismiss="modal">
                                <i class="fa fa-check"></i> Perfect
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default authSignup;
