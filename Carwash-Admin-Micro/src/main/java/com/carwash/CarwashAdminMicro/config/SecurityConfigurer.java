package com.carwash.CarwashAdminMicro.config;



import com.carwash.CarwashAdminMicro.Service.CustomUserDetailsService;
import com.carwash.CarwashAdminMicro.util.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfigurer {
    @Bean
    public static PasswordEncoder byCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Autowired
    private CustomUserDetailsService userDetailsService;
    @Autowired
    private JwtRequestFilter jwtRequestFilter;
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }
    @Bean
    protected SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.cors();
        http.csrf().disable().authorizeRequests()
                .antMatchers("/admins/findallWp","/adminauth/login","/adminauth/register","/manage/**").permitAll()
                .antMatchers("/admins").hasAuthority("ADMIN")
                .antMatchers("/users/**").hasAuthority("USER")
                .antMatchers("/orders/**").hasAuthority("ADMIN")
                .antMatchers("/washers/**").hasAuthority("WASHER")
                .anyRequest().authenticated()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtRequestFilter,UsernamePasswordAuthenticationFilter.class);
        return http.build();


    }
}
